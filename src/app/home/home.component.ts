import { AsyncPipe } from "@angular/common";
import { Component, inject } from "@angular/core";
import { collection, collectionData, Firestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";

@Component({
  selector: "app-home",
  imports: [AsyncPipe],
  template: `
    @for (post of posts$ | async; track $index) {
      <article>
        <span>{{ post.id }}</span>
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>
      </article>
    }
  `,
  styles: ``,
})
export class HomeComponent {
  private firestore: Firestore = inject(Firestore);

  posts$: Observable<any[]>;

  constructor() {
    const postsCollection = collection(this.firestore, "posts");
    this.posts$ = collectionData(postsCollection, {
      idField: "id",
    }) as Observable<any[]>;
  }
}
