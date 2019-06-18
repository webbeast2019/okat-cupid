import React from 'react';
import ProfileCard from '../../components/ProfileCard/ProfileCard';

const Profile: React.FC = () => {
  const catDescription = `
  Hi, I'm cat. Like so many other humans, you might find cats to be mysterious creatures.
  But believe it or not, it’s not that hard to make friends with a feline, if you know what to do.
  `;
  
  return (
    <ProfileCard imgSrc="/img/cat1.jpg" name="Cat 1" description={catDescription}/>
  )
};

export default Profile;