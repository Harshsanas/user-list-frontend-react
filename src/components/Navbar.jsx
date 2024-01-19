import * as S from './navbar.styles';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
    return (
        <S.NavbarContainer>
            <div className='navbarTitle'>
                User List
            </div>
            <div className='githubIcon'>
                <FontAwesomeIcon
                    icon={faGithub}
                />
            </div>
        </S.NavbarContainer>
    )
}
