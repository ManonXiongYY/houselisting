## House Listing Page
This web application is built on React.js. Its main functionality is to search and get a list of houses in various status, property types and locations.

### Introduction
In the first phase (as presented in the current project), we finish developingg the UI design of the page and fetch and render a list of property data from Perchwell API.
As a site user, they can see:
1. A sticky page header containing links to empty pages
2. A hero image with a centered label
3. A grid displaying three columns of listing cells (here, I set 12 results are displayed at one time, divided into 3 columns)
4. All relevant listing information displayed for each listing (according to the screenshot named as “Attribute Mapping”)
![Attribute Mapping](/public/attribute_mapping.png)

The entry point of the porject is `index.js`.
It mainly contains 3 components (from top to bottom): `<NavigationHeader />`, `<MainLogoSection />`, and `<HouseListing />`. The footer doesn't carry any information, thus  simply use JSX element to return the content. If in the future, new functionalities are added to the footer, we may extract it as an independent component.

In the second phase (not developing yet), we are going to devleop the search functionality.

### Components
The components are grouped by folders based on their positions and business logic. Each component has their own CSS file, but we can modify as the components in the same folder share the same CSS file. I assign different CSS files to different compnents, in order that later on if other people are working on my code and chaning the UI, they may find the corresponding CSS file directly and easily. However, this makes the files look scattered at the first glance. Therefore, it depends on the future needs.

#### NavigationHeader
This is a sticky menu header for navigation.

```
{menuItems.map((item, index) => {
  return (
    <div key={index}>
      <a href='about:blank' className="header-item">{item}</a>
    </div>
  );
})}
```

At first, I wrote five `<a>` tags for the five menu items. However, later on the menu items' contents and ordering may change, I use `array.map()` method and a arbitry `menuItems` array to demonstrate the easiness and efficiency of changing any content in the `menuItems`.

#### MainLogoSection
The name definitely needs to be renamed later. I plan to rename it as `ListingSearchSection`. Now, this is a simple hero image with one line of words, but we can add the search functioinality here. Once the user clicks that sentence, it changes to a search input box. The user enters a term and the search is initiated 1 second later if the user stops typing.

Code is like:
```
const [searchTerm, setSearchTerm] = useState();

useEffect(() => {
  const search = async () => {
    const response = await perchwell.get('/', { params: searchTerm });
    setResults(response.data);
  };
  if (searchTerm && !results.length) {
    search();
  } else {
    const timeOutId = setTimeOut(() => {
      if (searchTerm) {
        search();
      }
    }, 1000);
    return () => {
      clearTimeOut(timeOutId);
    };
  };
}, [searchTerm]);
```

Use `useEffect` hook with `setTimeOut` and `clearTimeOut`, it can detect when the user stops typing and decide whether to initiate the search.
As the results are consumed in `<HouseListing />` component, I recommend using **Context System** later, making the communication of props and data among the components easier and reducing unnecessary rerender.

I haven't implemented the search functionality because I am not sure what search fields should be displayed.

### HouseListing
This component contains the SortBy dropdown and the house listing.
The dropdown should be implemented later, too. I put a prototype for demonstration.

The listing is displayed with CSS grid. Each house is rendered as a `card`, with all attributes related.
Because it's hard to summarize the attributes related to the house, I haven't segemented `HouseListing` into smaller independent pieces. Besides, I think it's redundant to wrap the information on the bottom left corner in many many `<div>` tags. Though we can use `flexbox`, it's kind of meaningless. Therefore, I simply use `<span>` tags to display the information and do some styling so that they look simlilar to the mock-up.
And I've written some methods to process the returned data (open house's start time, house features, etc.) so that they are presented in a more readable way, but we need a more detailed processing in the future.

Some data doesn't inlucde `media.main_image` props, thus I use the `media.large_image_list[0]` as an alternative link.

### Pagination
This functionality is needed. Besides, it's user-friendly if the user can select how many houses are listed in one page.
