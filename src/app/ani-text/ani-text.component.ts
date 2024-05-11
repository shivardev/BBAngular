import { Component } from '@angular/core';

@Component({
  selector: 'app-ani-text',
  standalone: true,
  imports: [],
  templateUrl: './ani-text.component.html',
  styleUrl: './ani-text.component.css'
})
export class AniTextComponent {
  text1: string = "";
  text2: string = "";

  ngOnInit(): void {
    const texts = [
      "Developer 👩‍💻",
      "Gamer 🎮",
      "Content Creator 🎥",
      "Blogger 📝",
      "Blazing Bane"
    ];

    const elts: any = {
      text1: document.getElementById("text1"),
      text2: document.getElementById("text2"),
    };

    this.text1 = texts[texts.length - 1];
    this.text2 = texts[0];

    let textIndex = texts.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = 0.75;

    function doMorph() {
      morph -= cooldown;
      cooldown = 0;

      let fraction = morph / 1.2;
      if (fraction > 1) {
        cooldown = 0.75;
        fraction = 1;
      }

      setMorph(fraction);
    }

    function setMorph(fraction:any) {
      elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      fraction = 1 - fraction;
      elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      elts.text1.innerHTML = texts[textIndex % texts.length];
      elts.text2.innerHTML = texts[(textIndex + 1) % texts.length];
    }

    function doCooldown() {
      morph = 0;

      elts.text2.style.filter = "";
      elts.text2.style.opacity = "100%";

      elts.text1.style.filter = "";
      elts.text1.style.opacity = "0%";
    }

    function animate() {
      requestAnimationFrame(animate);

      let newTime = new Date();
      let shouldIncrementIndex = cooldown > 0;
      let dt = (newTime.getTime() - time.getTime()) / 1000;
      time = newTime;

      cooldown -= dt;

      if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          textIndex++;
        }

        doMorph();
      } else {
        doCooldown();
      }
    }

    animate();
  }
}
