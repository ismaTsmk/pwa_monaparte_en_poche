export interface User {
  uid: string;
  email: string;
  pseudo?: string; // Ajoutez le pseudo
  age?: number; // Ajoutez l'âge
  isPublic?: boolean; // Ajoutez l'état public/privé
  phoneNumber?: string; // Ajoutez le numéro de téléphone
  isAuthenticated?: boolean; // Ajoutez l'état d'authentification
}
