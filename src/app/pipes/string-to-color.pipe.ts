import {Pipe, PipeTransform} from '@angular/core';

@Pipe({standalone: true, name: 'stringToColor'})
export class StringToColorPipe implements PipeTransform {
  transform(inputString: string): string {
    // Tùy thuộc vào logic của bạn, bạn có thể thay đổi mã màu dựa trên inputString.
    // Ví dụ: Chuyển đổi chuỗi thành mã màu dựa trên hash code của chuỗi.
    const hashCode = StringToColorPipe.hashCode(inputString);
    return StringToColorPipe.intToRGB(hashCode);
  }

  private static hashCode(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  }

  private static intToRGB(i: number): string {
    const c = (i & 0x00ffffff).toString(16).toUpperCase();

    return '#' + '00000'.substring(0, 6 - c.length) + c;
  }
}
