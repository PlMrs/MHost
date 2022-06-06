import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpException, HttpStatus, Headers, ConsoleLogger, UseInterceptors, UploadedFile } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RolesGuard } from 'src/auth/security/roles.guard';
import { Roles } from 'src/auth/security/roles.decorator';
import { User, UserRole } from './entities/user.entity';
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { SwipeService } from 'src/swipe/swipe.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly swipeService: SwipeService
    ) {}

  @ApiOperation({description: "Ajout d'un utilisateur en base de donnée"})
  @ApiCreatedResponse({
    description: "Utilisateur ajouté avec succès",
    type: User,
  })
  @Post()
  async create(@Body() dto: CreateUserDto): Promise<User> {
    
    const isExisted = await this.usersService.findByEmail(dto.email)

    if(isExisted){
      throw new HttpException('User already exist',HttpStatus.UNAUTHORIZED)
    }

    return this.usersService.create(dto);
  }


  @ApiOperation({description: "Liste de tous les utilisateurs"})
  @ApiOkResponse({
    description: "Tous les utilisateurs",
    type: [User],
  })
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN)
  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.CUSTOMER)
  @Get('swipe')
  findNotSwiped(@Headers('user_id') id: number,@Headers('needs') needs: string): Promise<User[]> {
    return this.usersService.findNotSwiped(id,needs);
  }

  /*
  @ApiOperation({description: "Affiche un utilisateur grace à son id"})
  @ApiNotFoundResponse({ description: "L'utilisateur n'a pas été trouvé"})
  @ApiOkResponse({
    description: "L'utilisateur",
    type: User,
  })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(+id);
  }*/

  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.CUSTOMER)
  @Get('match')
  async findMatched(@Headers('user_id') id : number): Promise<User[]>{

      const ids = await this.swipeService.findUsersId(id)

      return this.usersService.findAllWithIds(ids)

  }


  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.CUSTOMER)
  @ApiOperation({description: "Modifie un utilisateur grace à son id"})
  @ApiNotFoundResponse({ description: "L'utilisateur n'a pas été trouvé"})
  @ApiOkResponse({
    description: "L'utilisateur patché",
    type: User,
  })
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.CUSTOMER)
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@Headers("user_id") id : number,@UploadedFile() file: Express.Multer.File) {

    const user = await this.usersService.findOne(id)

    const dto : UpdateUserDto = {picture : file.filename}
    const res = await this.usersService.update(id,dto)

    if(res.affected === 1){
      this.usersService.deletePicture(user.picture)

      return file.filename
    }
  }

  @ApiOperation({description: "Supprime un utilisateur grace à son id"})
  @ApiNotFoundResponse({ description: "L'utilisateur n'a pas été trouvé"})
  @ApiOkResponse({description: "L'utilisateur a été supprimé"})
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN)
  @Delete()
  async adminRemove(@Body() user: User): Promise<HttpStatus> {
    this.usersService.remove(user)
    this.usersService.deletePicture(user.picture)
    return HttpStatus.OK
  }
}
