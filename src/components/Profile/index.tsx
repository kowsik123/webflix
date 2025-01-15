"use client";

import Link from 'next/link';
import React from 'react'
import styled from 'styled-components'

export const ProfileIconCont = styled.div`
    border-radius: 4px;
    width: 25px;
    height: 25px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Profile = () => {};

Profile.Icon = ({src, name}: {src: string, name: string}) => {
  return (
    <ProfileIconCont>
        <img src={src} alt={name.at(0)} width={25} height={25}></img>
    </ProfileIconCont>
  )
};

const ProfileNICont = styled(Link)`
    display: flex;
    align-items: center;
`

const ProfileName = styled.div`
  font-size: 14px;
  margin-left: 8px;
`

Profile.NameAndIcon = ({src, name, href}: {src: string, name: string, href: string}) => {
    return (
      <ProfileNICont className='profile-name-icon' as={href? Link:'div'} href={href}>
          <Profile.Icon src={src} name={name}></Profile.Icon>
          <ProfileName>{name}</ProfileName>
      </ProfileNICont>
    )
};

export default Profile