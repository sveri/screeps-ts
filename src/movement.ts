import { CreepMemory, ScreepType } from './utils';

export const moveCreeps = function () {
    for (var i in Game.creeps) {
        let c: Creep = Game.creeps[i];
        let m: CreepMemory = c.memory;

        if(m.role && m.role === ScreepType.WORKER) {

            if (m.working === true && c.carry.energy == 0) {
                m.working = false;
            } else if(m.working === false && c.carry.energy == c.carryCapacity) {
                m.working = true;
            } else if (m.working === undefined) {
                m.working = false;
            }
            
            if (m.working === true) {
                if (c.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    c.moveTo(Game.spawns.Spawn1);
                }                
            } else {
                const s = c.pos.findClosestByPath(FIND_SOURCES) as Source;
                if (c.harvest(s) == ERR_NOT_IN_RANGE) {
                    c.moveTo(s);
                }
            }
        }
            
    }

}