import React, { useState } from 'react'
import { queryClient } from '../../../../App'
import { api } from '../../../../services/api'

import * as S from './styles'

export interface AvatarProps {
  imageSource: string | undefined
  name: string | undefined
}

const Avatar: React.FC<AvatarProps> = ({ imageSource, name }) =>  {
  const [isUploading, setIsUploading] = useState(false)

  const initials = name
    ?.split(' ')
    .map(name => name.slice(0, 1))
    .join()
    .replaceAll(',', '')

    const handleChangeAvatar = async () => {
      const fileInput = document.getElementById('icon-button-file') as any
    
      fileInput.onchange = async () => {
        const selectedFiles = [...fileInput.files]

        if (selectedFiles.length) {
          const file = selectedFiles[0]

          var formData = new FormData()
          
          formData.append("avatar", file)

          try {
            setIsUploading(true)
            
            await api.patch('/users/avatar', formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            })

            console.log('Avatar alterado com sucesso!')

            queryClient.invalidateQueries(['profile'])
          } catch (error) {
            console.log('Não foi possível alterar o avatar, tente novamente!')
          } finally {
            setIsUploading(false)
          }
        }
      }
    }

  return (
    <S.Avatar> 
      <S.Image
        src={imageSource}
        alt={name}
      />

      <label htmlFor="icon-button-file">
        <input 
          accept="image/*" 
          id="icon-button-file" 
          type="file"
          disabled={isUploading}
        />

        <S.ChangeAvatarButton
          onClick={handleChangeAvatar}
          aria-label="upload picture" 
        >
          <img src="/assets/Trocar de foto.svg" alt="Calendário" />
        </S.ChangeAvatarButton>
      </label>

      <S.Fallback delayMs={600}>
        {initials || name}
      </S.Fallback>
    </S.Avatar>
  )
}

export { Avatar }