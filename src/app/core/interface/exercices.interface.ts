export interface IExercices { 
    description: string, 
    groupeMusculaire: {
      id: number,
      nom: string,
    },
    groupeMusculaireId: number,
    id: number,
    image: string,
    nom: string,
}