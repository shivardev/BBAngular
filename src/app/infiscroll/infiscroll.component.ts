import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
interface Platform {
  name: string;
  image: string
  contents?: string
  link: string;
}
@Component({
  selector: 'app-infiscroll',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './infiscroll.component.html',
  styleUrl: './infiscroll.component.css'
})
export class InfiscrollComponent {
  data: Platform[] = [
    {
      name: "Youtube",
      image: "https://www.freeiconspng.com/uploads/logo-youtube-png-clipart-11.png",
      contents: `Live stream games and post offline videos`,
      link: "https://www.youtube.com/channel/UCPFM_Ug62Ei3CUfvquG4KOg",
    },
    {
      name: "Blogs",
      image: "https://th.bing.com/th/id/R.617238c937f0b354fbde2dbc06143af8?rik=ivT0RW7eBgOsjQ&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f05%2fWordPress-Logo-Free-Download-PNG.png&ehk=hoPwfQ2sAbj1h9mCQQ1JJBcf3YAFjkjWDcbXurLY9Vo%3d&risl=&pid=ImgRaw&r=0",
      contents: `Blogs for Sharing knowledge and experiences`,
      link: "https://blogs.blazingbane.com",
    },
    {
      name: "Rimmind",
      contents: 'Store thoughts with tags, Made with react',
      image: "https://www.svgrepo.com/show/395921/brain.svg",
      link: "https://rimmind.blazingbane.com",
    },

    {
      name: "Memes",
      image: "https://www.svgrepo.com/show/452229/instagram-1.svg",
      contents: `Post memes and also react to them live!`,
      link: "https://www.instagram.com/_balebanjara_/",
    },
    {
      name: "Github",
      image: "/assets/github.svg",
      contents:'All my projects of different variety',
      link: "https://github.com/KondaShivaradhan",
    },
    {
      name: "Guru Shots",
      contents:'Participate in Photography challenges. Veteran Level😎',
      image: "https://play-lh.googleusercontent.com/Gy5evbZJrvFQTTyLP3FUSHal1HTmIRLvF5QAHL5MubzbTzu6ZOAfHoNFWJv5i12xeTE",
      link: "https://rimmind.blazingbane.com",
    },
    {
      name: "Pexels",
      contents:'Photos captured with 📸 Canon m50 mark ii ',
      image: "https://forcreators.com/wp-content/uploads/2021/03/Pexels-logo-600x600.png",
      link: "https://rimmind.blazingbane.com",
    },
    {
      name: "Who am I?",
      image: "https://images.pexels.com/users/avatars/49914472/shivaradhan-konda-964.jpeg?auto=compress&fit=crop&h=130&w=130&dpr=1",
      contents:'Wanna know more about me?',
      link: "https://shivardev.github.io/",
    },

  ];
}
