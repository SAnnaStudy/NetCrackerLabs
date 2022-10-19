import {Observable} from 'rxjs'
const observable$ = new Observable(observer => {
    for(var i = 1 ; i < 101; i++){
        for(var ii = 2; ii < i ; ii++){
            if(i % ii == 0){
                continue;
            }
        }
        observer.next(i);
    }
    observer.complete();
})
observable$.subscribe(
    (res) => console.log(res),
    () => console.log('complete')
);