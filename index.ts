function formatString(input: string, toUpper?: boolean): string{
    if(toUpper===false){
        return input.toLowerCase();
    }
    else{
        return input.toUpperCase();
    }
}

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    return items.filter((item: { title: string; rating: number })=> item.rating >=4)
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
    const result: T[] = [];
    for (const arr of arrays) {
      for (const item of arr) {
        result.push(item);
      }
    }
    return result;
}