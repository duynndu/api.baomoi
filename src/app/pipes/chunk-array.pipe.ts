import {Pipe, PipeTransform} from '@angular/core';
import {T} from "@fullcalendar/core/internal-common";

@Pipe({
    standalone: true,
    name: 'chunkArray'
})
export class ChunkArrayPipe implements PipeTransform {

    transform(myArray: T[], chunkSize: number): T[][] {
        const result: T[][] = [];
        for (let i = 0; i < myArray?.length; i += chunkSize) {
            result.push(myArray.slice(i, i + chunkSize));
        }
        return result;

    }

}
