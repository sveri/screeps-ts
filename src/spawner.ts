import {UUID, CreepMemory} from './utils';



export const spawn = function(spawn: StructureSpawn) {    
    const creepName = UUID.generate();
    if(spawn.spawnCreep([MOVE, MOVE, CARRY, WORK], creepName, {dryRun: true}) == 0){
        spawn.spawnCreep([MOVE, MOVE, CARRY, WORK], creepName);

        // Memory.foo = true;
        console.log("spawned: " + creepName);
    }
}

