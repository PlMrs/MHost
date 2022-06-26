import { CreateSwipeDto } from './create-swipe.dto';
declare const UpdateSwipeDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateSwipeDto>>;
export declare class UpdateSwipeDto extends UpdateSwipeDto_base {
    isMatched?: boolean;
}
export {};
