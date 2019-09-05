import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'activiteBlog';
  posts=[
    {
      title: "Hello",
      content:"Hey ! Voici mon premier post likez !!!",
      loveIts:2,
      created_at: new Date(2013,13,1)
    },
    {
      title: "Le Post",
      content:"Je suis le post le plus beau",
      loveIts:-2,
      created_at: new Date(2014,2,12)
    },
    {
      title: "La Poste",
      content:"Je suis le post rigolo ou le post lourd ça dépend des gens ...",
      loveIts:4,
      created_at: new Date(2015,12,26)
    }
  ];
}
