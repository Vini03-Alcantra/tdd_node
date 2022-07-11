import { SavePurchases } from "@/domain/usecases";
import { CacheStore } from "../protocols/cache";

export class CacheStoreSpy implements CacheStore {
    deleteCallsCount = 0;
    insertCallsCount = 0;
    deleteKey: string;
    insertKey: string;
    insertValues: Array<SavePurchases.Params> = []

    delete (key: string): void {
        this.deleteCallsCount++
        this.deleteKey = key
    }

    insert(key: string, value: any):  void {
        this.insertCallsCount++;
        this.insertKey = key;
        this.insertValues = value
    }

    simulateDeleteError (): void {
        console.log(jest.spyOn(CacheStoreSpy.prototype, 'delete').mockImplementationOnce(() => { throw new Error() }))
        jest.spyOn(CacheStoreSpy.prototype, 'delete').mockImplementationOnce(() => { throw new Error() })
    }

    simulateInsertError (): void {
        console.log(jest.spyOn(CacheStoreSpy.prototype, 'insert').mockImplementationOnce(() => { throw new Error() }))
        jest.spyOn(CacheStoreSpy.prototype, 'insert').mockImplementationOnce(() => { throw new Error() })
    }
}