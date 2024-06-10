import Inscription from '../models/inscription.model';
import User from '../models/user.model';
import Course from '../models/course.model';

class InscriptionService {
    async inscrireApprenant(userId: string, courseId: string, paymentMode: string) {
        const user = await User.findById(userId);
        if (!user || user.type !== 'Apprenant') {
            throw new Error('Seuls les apprenants peuvent s\'inscrire.');
        }

        const course = await Course.findById(courseId);
        if (!course) {
            throw new Error('Cours non trouvé.');
        }

        const inscription = new Inscription({
            user: userId,
            course: courseId,
            paymentMode: paymentMode
        });

        await inscription.save();
        return inscription;
    }
}

export default new InscriptionService();