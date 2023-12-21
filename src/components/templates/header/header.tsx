import { useTranslation } from 'next-i18next';
import { LanguageIcon } from '@contentful/f36-icons';
import { Container } from '@src/components/shared/container';
import Image from 'next/image';
import logo from '@public/images/logo.png';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className=" py-3 md:py-5">
      <nav>
        <Container className="flex items-center justify-between">
          <div className=" w-14 md:ml-6 md:w-full">
            <Image src={logo} alt="logo" width={120} height={120} />
          </div>
          <div className="flex items-center justify-evenly gap-4 font-semibold underline  md:mr-8 md:w-[15%]">
            <button className="flex items-center text-xs">
              <LanguageIcon variant="secondary" />
              IN-EN
            </button>
            <button className="text-xs">SIGN IN</button>
          </div>
        </Container>
      </nav>
    </header>
  );
};
