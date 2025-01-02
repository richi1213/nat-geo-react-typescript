import {
  Button,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components';
import { Globe } from 'lucide-react';
import type { Language } from './types';
import { i18n } from '@/i18n';
import { useAtom } from 'jotai';
import { languageAtom } from '@/atoms';
import { useEffect } from 'react';

const languages = {
  en: { name: 'English', flag: '🇬🇧' },
  ka: { name: 'ქართული', flag: '🇬🇪' },
};

export const LanguagePicker: React.FC = () => {
  const [language, setLanguage] = useAtom(languageAtom);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const changeLanguage = (lang: Language) => () => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          className='gap-0 space-x-2 rounded-none px-0 text-primary-foreground hover:bg-foreground hover:text-chart-5 focus:outline-none focus:ring-0 focus-visible:ring-0'
        >
          <Globe className='size-5' />
          <span className='font-bold uppercase'>{language}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56 rounded-none border-2 border-none bg-background p-0'>
        {(Object.keys(languages) as Language[]).map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={changeLanguage(lang)}
            className='flex items-center space-x-2 rounded-none text-foreground transition-all duration-300 hover:bg-accent hover:text-primary-foreground'
          >
            <span className='text-2xl'>{languages[lang].flag}</span>
            <span className='font-semibold'>{languages[lang].name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
