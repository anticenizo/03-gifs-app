import { Component } from '@angular/core';

interface Gif {
  title: string;
  url: string;
}

@Component({
  selector: 'gift-list-item',
  imports: [],
  templateUrl: './gift-list-item.component.html',
})
export class GiftListItemComponent {
    gif : Gif[] = [
      {
        title: 'Imagen 1',
        url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg'
      },
      {
        title: 'Imagen 2',
        url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg'
      },
      {
        title: 'Imagen 3',
        url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg'
      },
      {
        title: 'Imagen 4',
        url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg'
      },
      {
        title: 'Imagen 5',
        url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg'
      },
      {
        title: 'Imagen 6',
        url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg'
      },
      {
        title: 'Imagen 7',
        url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg'
      },
      {
        title: 'Imagen 8',
        url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg'
      },
      {
        title: 'Imagen 9',
        url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg'
      },
      {
        title: 'Imagen 10',
        url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg'
      },
      {
        title: 'Imagen 11',
        url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg'
      }
    ]
}


