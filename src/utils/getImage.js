const profileImages = {
    'profile.jpg':require('../../assets/img/profile.jpg'),
    'profile.jpg':require('../../assets/img/profile.jpg'),
}

const countryFlags = {
    'flag1.png':require('../../assets/img/spain.png'),
    'flag2.png':require('../../assets/img/brazil.png'),
    'flag3.png':require('../../assets/img/canada.png'),
    'flag4.png':require('../../assets/img/china.png'),
    'flag5.png':require('../../assets/img/chile.png'),
    'flag6.png':require('../../assets/img/costa-rica.png'),
    'flag7.png':require('../../assets/img/england.png'),
    'flag8.png':require('../../assets/img/france.png'),
    'flag9.png':require('../../assets/img/germany.png'),
    'flag10.png':require('../../assets/img/japan.png'),
}

export function profileImage(name){
    return profileImages[name] || null;
}

export function countryFlag(name){
    return countryFlags[name] || null;
}