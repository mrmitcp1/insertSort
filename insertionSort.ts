function InsertionSort(arr:number[]) {
    for (let i = 1; i < arr.length; i++) {
        let j = i -1;
        let key = arr[i]
        while (j>=0 && arr[j]>key){
            arr[j+1]=arr[j];
            j--
            console.log('thay the'+ arr[j+1] + 'bang' + arr[j])
        }
        arr[j+1]=key
        console.log('key luc nay la ' + key)
    }return arr
}
let arr=[9,7,3,4,5,6,1,5,8,4]
console.log(InsertionSort(arr))