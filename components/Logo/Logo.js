import LogoStyles from "./Logo.styled"
import Link from "next/link";
import { useRouter } from "next/router";

const Logo = ({isPopup}) => {

    const router = useRouter();

    const handleClick = e => {
        if(isPopup) {
            e.stopPropagation();
            router.back();
            return;
        }
    }
    
    return (
        <Link href="/" scroll={false}>
           <a onClick={handleClick}>
                <LogoStyles>
                    <i className="img">
                        <svg width="128pt" height="128pt" version="1.0" viewBox="0 0 128 128">
                            <g transform="translate(0 128) scale(.1 -.1)">
                                <path d="m500 1265c-301-68-514-351-497-660 18-321 281-584 602-602 319-18 598 200 661 517 62 311-119 618-428 727-92 32-241 40-338 18zm220-139c78-39 139-94 206-187 107-148 149-186 212-191 18-1 32-7 32-13 0-5 3-20 6-31 5-18-1-24-39-39-38-14-51-15-81-5-53 17-136 98-207 203-34 50-80 114-102 140-39 47-140 126-188 147-19 8-10 10 42 6 46-2 82-12 119-30zm343-154c34-47 67-105 67-118 0-15-45 35-96 107-29 42-60 82-69 89-8 7-15 17-15 22 0 17 78-52 113-100zm-525 72c68-34 148-115 218-222 80-122 126-175 189-216 62-42 142-61 193-47 39 12 42-1 10-49-29-42-100-80-149-80-101 0-198 70-318 229-49 65-115 140-145 168-102 90-219 130-310 104-22-6-41-9-43-7-11 10 78 90 129 115 80 41 152 42 226 5zm-162-228c73-34 125-84 219-211 97-131 163-193 253-237 58-29 76-33 150-33h83l-29-26c-72-64-205-86-306-50-94 33-156 83-287 231-86 97-150 134-236 135-48 0-68-5-92-23l-31-23v38c0 87 40 163 105 200 52 29 107 29 171-1zm-65-320c20-14 69-63 108-110 116-137 210-201 342-235l74-19-79-17c-212-47-436 41-558 220-57 84-63 130-22 172 21 21 32 24 61 20 20-4 53-17 74-31z"/>
                            </g>
                        </svg>
                    </i>
                    <p className="text">
                        Senza
                    </p>
                </LogoStyles>
           </a>
        </Link>
    )
}

export default Logo