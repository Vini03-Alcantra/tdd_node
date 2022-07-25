export class CachePolicy {
    private static maxAheInDays = 3

    private constructor(){}

    static validate (timestamp: Date, date: Date): boolean {
        const maxAge = new Date(timestamp)
        maxAge.setDate(maxAge.getDate() + CachePolicy.maxAheInDays)
        return maxAge > date
    }
}