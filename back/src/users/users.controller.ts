import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RolesGuard } from 'src/auth/security/roles.guard';
import { Roles } from 'src/auth/security/roles.decorator';
import { User, UserRole } from './entities/user.entity';
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({description: "Ajout d'un utilisateur en base de donnée"})
  @ApiCreatedResponse({
    description: "Utilisateur ajouté avec succès",
    type: User,
  })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }


  @ApiOperation({description: "Liste de toutes les utilisateurs"})
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

  @ApiOperation({description: "Affiche un utilisateur grace à son id"})
  @ApiNotFoundResponse({ description: "L'utilisateur n'a pas été trouvé"})
  @ApiOkResponse({
    description: "L'utilisateur",
    type: User,
  })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(+id);
  }


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

  @ApiOperation({description: "Supprime un utilisateur grace à son id"})
  @ApiNotFoundResponse({ description: "L'utilisateur n'a pas été trouvé"})
  @ApiOkResponse({description: "L'utilisateur a été supprimé"})
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usersService.remove(+id);
  }
}
