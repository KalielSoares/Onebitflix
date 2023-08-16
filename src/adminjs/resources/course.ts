import { ResourceOptions } from "adminjs";

export const courseResourceOptions: ResourceOptions = {
    navigation: 'Catálogo',
    editProperties: ['name', 'synopsis', 'uploadThumbnail', 'featured', 'categoryId'],
    filterProperties: ['name', 'synopsis', 'categoryId', 'createdAt', 'updateAt'],
    listProperties: ['id','name', 'featured','categoryId'],
    showProperties: ['id','name', 'synopsis', 'featured', 'uploadThumbnail','categoryId', 'createdAt', 'updateAt']
}