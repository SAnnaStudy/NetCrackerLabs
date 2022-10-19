import {Observable} from 'rxjs'
const observable = new Observable(observer => {
  for(var i = 5 ; i > 0; i--){
    observer.next(i);
  }
  observer.error();
})
const observer = {
  next: value => alert(value),
  error: error => alert(error),
};
observable.subscribe(observer);