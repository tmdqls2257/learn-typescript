{
  type PageInfo = {
    title: string;
  };

  type Page = 'home' | 'about' | 'contact';

  const nav: Record<Page, PageInfo> = {
    // Page와 PageInfo를 묶어줍니다.
    home: { title: 'Home' },
    about: { title: 'About' },
    contact: { title: 'Contact' },
  };
  type Product = 'cat' | 'dog';
  type NewProduct = Capitalize<Product>;
}
