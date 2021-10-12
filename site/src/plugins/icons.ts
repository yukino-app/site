import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faDownload,
    faPuzzlePiece,
    faCompactDisc,
    faHeart,
    faList,
    faPaintBrush,
    faSun,
    faMoon,
    faBars,
    faTimes,
    faBoxOpen,
    faArchive,
} from "@fortawesome/free-solid-svg-icons";
import {
    faLinux,
    faWindows,
    faAndroid,
    faApple,
} from "@fortawesome/free-brands-svg-icons";

library.add(
    faDownload,
    faPuzzlePiece,
    faCompactDisc,
    faHeart,
    faList,
    faPaintBrush,
    faSun,
    faMoon,
    faBars,
    faTimes,
    faWindows,
    faBoxOpen,
    faArchive,
    faLinux,
    faAndroid,
    faApple
);

export { FontAwesomeIcon as IconComponent } from "@fortawesome/vue-fontawesome";
