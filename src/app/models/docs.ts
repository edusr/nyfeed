import HeadLine from './headLine'
import Multimedia from './multimedia'

export default interface Docs {
    abstract: string;
    web_url: string;
    lead_paragraph: string;
    headline: HeadLine;
    multimedia: Multimedia[];
    
}