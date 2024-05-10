export type AboutType = {
    _id: string,
    about: PortableTextChild[],
  };

export type AboutDetailsType = {
    _id: string,
    aboutDetails: PortableTextChild[],
  };

  type PortableTextChild =
  | BlockContent
  | {
      _type: "image";
      asset: {
        _ref: string;
        _id: string;
      };
    };

type BlockContent = {
  _key: string;
  _type: "block";
  style: string;
  children: PortableTextChild[];
  list: string | undefined;
  marks: string[];
};