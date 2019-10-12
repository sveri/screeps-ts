import { UUID, SpawnMemory, CreepMemory, CreepMap, ScreepType } from './utils';



export const spawn = function (spawn: StructureSpawn, creeps: CreepMap) {
    const creepName = UUID.generate();
    const sm: SpawnMemory = Game.spawns.Spawn1.memory;

    let numberWorkers = 0;
    let numberBuilders = 0;
    for (var i in creeps) {
        const creep = creeps[i];
        const cm: CreepMemory = creep.memory;
        if (cm.role && cm.role === ScreepType.WORKER) {
            numberWorkers++;
        } else if (cm.role && cm.role === ScreepType.BUILDER) {
            numberBuilders++;
        }
    }

    // console.log( spawn.spawnCreep([MOVE, WORK, WORK, WORK], creepName, { dryRun: true }));

    if (numberWorkers < 5 &&
        spawn.spawnCreep([MOVE, MOVE, CARRY, WORK], creepName, { dryRun: true }) == OK) {
        spawn.spawnCreep([MOVE, MOVE, CARRY, WORK], creepName, { memory: { role: ScreepType.WORKER } });
        console.log("spawned worker: " + creepName);
    } else if (numberBuilders < 3 &&
        spawn.spawnCreep([MOVE, WORK, WORK], creepName, { dryRun: true }) == OK) {
        spawn.spawnCreep([MOVE, WORK, WORK], creepName, { memory: { role: ScreepType.BUILDER } });
        console.log("spawned builder: " + creepName);
    }
}

