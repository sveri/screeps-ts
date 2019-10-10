import { UUID, SpawnMemory } from './utils';



export const spawn = function (spawn: StructureSpawn) {
    const creepName = UUID.generate();
    const sm: SpawnMemory = Game.spawns.Spawn1.memory;

    if ((sm.workerCreeps == undefined ||
        sm.workerCreeps < 5)
        &&
        spawn.spawnCreep([MOVE, MOVE, CARRY, WORK], creepName, { dryRun: true }) == 0) {
        spawn.spawnCreep([MOVE, MOVE, CARRY, WORK], creepName);

        // Memory.foo = true;
        sm.workerCreeps ? sm.workerCreeps++ : 1;
        console.log("spawned: " + creepName);
    }
}

