from scrapy.selector import Selector
from scrapy.contrib.linkextractors.sgml import SgmlLinkExtractor
from scrapy.contrib.spiders import CrawlSpider, Rule
from freepeople.items import ScarfItem

class ScarvesSpider(CrawlSpider):
    name = 'scarves'
    allowed_domains = ['freepeople.com']
    start_urls = ['http://www.freepeople.com/scarves-3/']
    rules = [Rule(SgmlLinkExtractor(allow=['scarves-3/[a-z-]*/'], 
        restrict_xpaths=["//*[@id='products']/div/ul/li/div/div[1]"]), 
        'parse_item')]

    def parse_item(self, response):
        sel = Selector(response)
        scarfSelector = sel.css(".content")        

        scarf = ScarfItem()
        scarf['name'] = scarfSelector.css(".metadata h1::text").extract()[0]
        scarf['photo'] = scarfSelector.css(".primary a img::attr(src)").extract()[0]
        
        price = scarfSelector.css(".symbol::text").extract()[0] + scarfSelector.css(".dollars::text").extract()[0] + scarfSelector.css(".cents::text").extract()[0]
        scarf['price'] = price
        
        scarf['url'] = response.url
        
        scarf['available_colors'] = scarfSelector.css(".product-option ul li a img::attr(alt)").extract()
        # for colors with only one option
        if not scarf['available_colors']:
            scarf['available_colors'].append(scarfSelector.css(".color-options .alias::text").extract()[0])
        
        scarf['description'] = scarfSelector.css(".long-desc::text").extract()[0]

        return scarf