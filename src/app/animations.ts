import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  AnimationTriggerMetadata } from '@angular/animations';

export const routerTransition: AnimationTriggerMetadata =
  trigger('routerTransition', [

  state('void', style({position:'absolute', width:'100%', height:'100%', opacity: 0})),
  state('*', style({position:'absolute', width:'100%', height:'100%', opacity: 1})),

  transition(':enter', [
    style({transform:'translateY(50%)', opacity: 0}),
    animate('0.8s ease-in-out', style({transform: 'translateY(0%)', opacity: 1}))
  ]),

  transition(':leave', [
    style({transform:'translateY(0%)', opacity: 1}),
    animate('0.8s ease-in-out', style({transform: 'translateY(-50%)', opacity: 0}))
  ])
]);
