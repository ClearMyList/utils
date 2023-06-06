export class NumberHelper {
  static parseToReadableText(value = 0): string {
    if (value < 1000) return `${value}`;
    if (value < 1000000) return `${(value / 1000).toFixed(1)}K`;
    if (value < 1000000000) return `${(value / 1000000).toFixed(1)}M`;
    if (value < 1000000000000) return `${(value / 1000000000).toFixed(1)}B`;

    return `${(value / 1000000000000).toFixed(1)}T`;
  }
}
