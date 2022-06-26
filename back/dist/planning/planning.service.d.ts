import { Repository } from 'typeorm';
import { CreatePlanningDto } from './dto/create-planning.dto';
import { Planning } from './entities/planning.entity';
export declare class PlanningService {
    private data;
    constructor(data: Repository<Planning>);
    findAllWithIds(user_1: number, user_2: number): Promise<Planning[]>;
    create(dto: CreatePlanningDto): Promise<Planning>;
}
