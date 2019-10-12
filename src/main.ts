import  {spawn} from './spawner';
import {moveCreeps} from './movement';

const spawn1 = Game.spawns.Spawn1;

const creeps = Game.creeps;
    
spawn(spawn1, creeps);
moveCreeps();



// console.log("from app");