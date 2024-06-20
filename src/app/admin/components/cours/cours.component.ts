import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../auth.service';
import { Course } from '../../../models/course.model';
import { CourseService } from '../../../services/course.service';
import { User } from '../../../models/user.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Module } from '../../../models/module.model';
import { ModuleService } from '../../../services/module.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrl: './cours.component.css',
})
export class CoursComponent implements OnInit{
[x: string]: any;

  courses: Course[] = [];
  courseForm!: FormGroup;
  moduleForm!: any;
  currentCourseId?: string | null;
  currentUser: User | null = null;
  selectedFile: any;

  filteredCourses: Course[] = [];
  paginatedCourses: Course[] = [];
  isEditModalOpen: boolean = false;
  isDeleteModalOpen = false;
  searchText = '';
  currentPage = 1;
  itemsPerPage = 4;
  totalItems = 0;
  modalRef?: BsModalRef;
  deleteMsg: string | null = '';

  levels: string[] = ['Débutant', 'Intermediaire', 'Difficile'];
  categories: string[] = ['Web', 'Mobile', 'Réseau', 'CyberSécurité'];

  modules: Module[] = [];

  constructor( private fb: FormBuilder, private authServ: AuthService, private moduleServ: ModuleService, private courseServ: CourseService, private modalService: BsModalService) {
    this.courseForm = this.fb.group({
      title: ['', Validators.required],
      duration: [0, Validators.required],
      level: ['', Validators.required],
      categorie: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['https://hello-pomelo.com/wp-content/uploads/2024/01/nodejs.jpg', Validators.required],
      priceType: ['', Validators.required],
      priceAmount: [0, Validators.required],
      modules: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.loadCourses();
    this.getCurrentUser();
  }

  /**
   * chargement des données
   */
  loadCourses(): void {
    this.courseServ.getCourses().subscribe(courses => {
      this.courses = courses.reverse();
      this.searchCourse();
    })
  }

  /**
   * fonction de rechercche d'un par son titre
   */
  searchCourse(): void {
    if(this.searchText){
      this.filteredCourses = this.courses.filter(course => {
        return (
          course.title?.toLowerCase().includes(this.searchText.toLowerCase())
        )
      })
    }else {
      this.filteredCourses = this.courses
    }
    this.totalItems = this.filteredCourses.length;
    this.updatePaginatedCourses();
  }

  /**
   * liste paginée des cours
   */
  updatePaginatedCourses(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedCourses = this.filteredCourses.slice(startIndex, endIndex);
  }

  /**
   * bouton de changement de page
   * @param event
   */
  pageChanged(event: any): void {
    this.currentPage = event.page;
    this.updatePaginatedCourses();
  }

  /**
   * Fonction pour tronquer la description
   */
  truncateDescription(description: string | undefined): string {
    if (!description) {
      return '';
    }
    return description.length > 50 ? description.slice(0, 50) + '...' : description;
  }

  /**
   *
   */
  getCurrentUser(): void {
    this.currentUser = this.authServ.getCurruntUser();
  }

  /**
   *
   * @param template
   */
  openModal(templateForm: TemplateRef<any>): void {
    this.isEditModalOpen = false;
    this.currentCourseId = null;
    this.courseForm.reset();
    this.courseForm.patchValue({ imageUrl: 'https://hello-pomelo.com/wp-content/uploads/2024/01/nodejs.jpg' });
    this.modalRef = this.modalService.show(templateForm);
  }

  /**
   *
   */
  closeModal(): void {
    if (this.modalRef) {
      this.courseForm.reset();
      this.modalRef.hide();
    }
  }

  /**
   *
   */
  onSubmit(): void {
    if (this.courseForm.valid) {
      const course: Course = { ...this.courseForm.value };

      course.price = {
        type: this.courseForm.value.priceType,
        amount: this.courseForm.value.priceAmount
      };

      delete (course as any).priceType;
      delete (course as any).priceAmount;

      if (this.currentUser) {
        course.formateur = this.currentUser;
      }

      if (this.isEditModalOpen && this.currentCourseId != null) {
        this.courseServ.updateCourse(this.currentCourseId, course).subscribe(
          (response) => {
            console.log('Mise à jour réussie:', response);
            this.loadCourses();
            this.isEditModalOpen = false;
            this.courseForm.reset();
            this.closeModal();
          },
          (error) => {
            console.error('Erreur lors de la mise à jour:', error);
          }
        );
      } else {
        this.courseServ.addCourse(course).subscribe(() => {
          this.loadCourses();
          this.courseForm.reset();
          this.closeModal();
        });
      }
    }
  }

  /**
   *
   * @param course
   */
  editCourse(course: Course, template: TemplateRef<any>): void {
    this.isEditModalOpen = true;
    this.currentCourseId = course._id;
    this.courseForm.patchValue({
      title: course.title,
      description: course.description,
      imageUrl: course.imageUrl,
      duration: course.duration,
      level: course.level,
      categorie: course.categorie,
      priceType: course.price?.type,
      priceAmount: course.price?.amount,
      modules: course.modules
    });

    this.modalRef = this.modalService.show(template);
  }

  /**
   *
   * @param courseId
   */
  listModule(courseId: string, templateModules: TemplateRef<any>){
    const courseById = this.courses.find(course => course._id === courseId);
    if (courseById) {
        this.modules = courseById.modules;
    } else {
        this.modules = [];
    }
    this.modalRef = this.modalService.show(templateModules)
  }

  /**
   *
   */
  confirmDelete(courseId: string, templateDelete: TemplateRef<any>): void {
    this.currentCourseId = courseId;

    if (courseId) {
      const courseToDelete = this.courses.find(course => course._id === courseId);
      if (!courseToDelete) {
        this.deleteMsg = `Le cours avec l'ID ${courseId} n'existe pas.`;
        console.error(this.deleteMsg);
        return;
      }
    }
    this.modalRef = this.modalService.show(templateDelete)
  }


  /**
   *
   * @param courseId
   */
  deleteConfirmed(): void {
    if (this.currentCourseId) {
      this.courseServ.deleteCourse(this.currentCourseId).subscribe(() => {
        this.loadCourses();
        this.closeModal();
      });
    }
  }


  /**
   *
   */
  resetForm(): void {
    this.isEditModalOpen = false;
    this.courseForm.reset();
  }

  addModule(courseId: string, modalFormModule: TemplateRef<any>){

    this.moduleForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      idCours: [courseId]
    });

    this.modalRef = this.modalService.show(modalFormModule)
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  onSubmitModule(){
    console.log(this.moduleForm.value.name);

    const formData = new FormData();
    formData.append('name', this.moduleForm.value.name);
    formData.append('description', this.moduleForm.value.description);
    formData.append('idCours', this.moduleForm.value.idCours);
    formData.append('file', this.selectedFile, this.selectedFile?.name);

    this.courseServ.createModule(formData).subscribe(() => {
      this.loadCourses();
      this.courseForm.reset();
      this.closeModal();
    });
  }
}
