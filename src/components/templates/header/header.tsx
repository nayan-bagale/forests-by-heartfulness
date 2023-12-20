import { useTranslation } from 'next-i18next';
import { LanguageIcon } from '@contentful/f36-icons';
import { Container } from '@src/components/shared/container';
import Image from 'next/image';
import logo from '@public/images/logo.png';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="py-5">
      <nav>
        <Container className="flex items-center justify-between">
          <div>
            <Image src={logo} alt="logo" width={100} height={100} />
          </div>
          <div className="flex w-[15%] items-center justify-between underline">
            <button className="flex items-center">
              <LanguageIcon variant="secondary" />
              IN-EN
            </button>
            <button>SIGN IN</button>
          </div>
        </Container>
      </nav>
    </header>
  );
};
