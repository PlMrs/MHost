import { HttpStatus } from '@nestjs/common';
import { CreatePlanningDto } from './dto/create-planning.dto';
import { Planning } from './entities/planning.entity';
import { PlanningService } from './planning.service';
export declare class PlanningController {
    private readonly planningService;
    constructor(planningService: PlanningService);
    findAllWithIds(user_1: number, user_2: number): Promise<Planning[]>;
    create(dto: CreatePlanningDto): Promise<HttpStatus>;
}
