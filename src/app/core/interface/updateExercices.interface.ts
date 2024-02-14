export interface IUpdateExercices {
    Nom: string,
    exercices : {
        exercice: {
            description: string,
            groupeMusculaireId: number,
            id: number,
            image: string,
            nom: string,
        }
        exercicesId: number,
        nbSerie: number,
        seancesId: number
    }[]
}