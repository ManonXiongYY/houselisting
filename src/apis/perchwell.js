import axios from "axios";

const account_name = 'sothebys_international_realty';

export default axios.create({
  baseURL: `https://staging.perchwell.com/api/feeds/${account_name}`,
  headers: {
    Authorization: 'Qs7MGQchX2DUZ9BX8wYpjjgM',
  }
});
