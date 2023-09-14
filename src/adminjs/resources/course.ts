import { FeatureType, ResourceOptions } from 'adminjs'
import path from "path";
import uploadFileFeature from '@adminjs/upload'

export const courseResourceOptions: ResourceOptions = {
    navigation: 'Catálogo',
    editProperties: ['name', 'synopsis', 'uploadThumbnail', 'featured', 'categoryId'],
    filterProperties: ['name', 'synopsis', 'categoryId', 'createdAt', 'updatedAt'],
    listProperties: ['id','name', 'featured','categoryId'],
    showProperties: ['id','name', 'synopsis', 'featured', 'uploadThumbnail','categoryId', 'createdAt', 'updatedAt']
}

export const courseResourceFeatures: FeatureType[] = [
    uploadFileFeature({
      provider: {
        local: {
          bucket: path.join(__dirname, '../../../public')
        }
      },
      properties: {
        key: 'thumbnailUrl',
        file: 'uploadThumbnail'
      },
      uploadPath: (record, filename) => `thumbnails/course-${record.get('id')}/${filename}`
    })
  ]