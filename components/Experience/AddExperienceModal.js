import AddIcon from '@mui/icons-material/Add';
import {
  Autocomplete,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography
} from '@mui/material';
import { memo, useState } from 'react';
import StyledInput from '../common/StyledInput';
import SenzaModal from '../MuiModal/SenzaModal';
import AsyncAutocomplete from './AsyncAutocomplete';

const qualList = ['Experience'];
const Industries = [
  'Accounting',
  'Airlines/Aviation',
  'Alternative Dispute Resolution',
  'Alternative Medicine',
  'Animation',
  'Apparel & Fashion',
  'Architecture & Planning',
  'Arts & Crafts',
  'Automotive',
  'Aviation & Aerospace',
  'Banking',
  'Biotechnology',
  'Broadcast Media',
  'Building Materials',
  'Business Supplies & Equipment',
  'Capital Markets',
  'Chemicals',
  'Civic & Social Organization',
  'Civil Engineering',
  'Commercial Real Estate',
  'Computer & Network Security',
  'Computer Games',
  'Computer Hardware',
  'Computer Networking',
  'Computer Software',
  'Construction',
  'Consumer Electronics',
  'Consumer Goods',
  'Consumer Services',
  'Cosmetics',
  'Dairy',
  'Defense & Space',
  'Design',
  'E-learning',
  'Education Management',
  'Electrical & Electronic Manufacturing',
  'Entertainment',
  'Environmental Services',
  'Events Services',
  'Executive Office',
  'Facilities Services',
  'Farming',
  'Financial Services',
  'Fine Art',
  'Fishery',
  'Food & Beverages',
  'Food Production',
  'Fundraising',
  'Furniture',
  'Gambling & Casinos',
  'Glass, Ceramics & Concrete',
  'Government Administration',
  'Government Relations',
  'Graphic Design',
  'Health, Wellness & Fitness',
  'Higher Education',
  'Horticulture',
  'Hospital & Health Care',
  'Hospitality',
  'Human Resources',
  'Import & Export',
  'Individual & Family Services',
  'Industrial Automation',
  'Information Services',
  'Information Technology & Services',
  'Insurance',
  'International Affairs',
  'International Trade & Development',
  'Internet',
  'Investment Banking',
  'Investment Management',
  'Judiciary',
  'Law Enforcement',
  'Law Practice',
  'Legal Services',
  'Legislative Office',
  'Leisure, Travel & Tourism',
  'Libraries',
  'Logistics & Supply Chain',
  'Luxury Goods & Jewelry',
  'Machinery',
  'Management Consulting',
  'Maritime',
  'Market Research',
  'Marketing & Advertising',
  'Mechanical Or Industrial Engineering',
  'Media Production',
  'Medical Device',
  'Medical Practice',
  'Mental Health Care',
  'Military',
  'Mining & Metals',
  'Mobile Games',
  'Motion Pictures & Film',
  'Museums & Institutions',
  'Music',
  'Nanotechnology',
  'Newspapers',
  'Non-profit Organization Management',
  'Oil & Energy',
  'Online Media',
  'Outsourcing/Offshoring',
  'Package/Freight Delivery',
  'Packaging & Containers',
  'Paper & Forest Products',
  'Performing Arts',
  'Pharmaceuticals',
  'Philanthropy',
  'Photography',
  'Plastics',
  'Political Organization',
  'Primary/Secondary Education',
  'Printing',
  'Professional Training & Coaching',
  'Program Development',
  'Public Policy',
  'Public Relations & Communications',
  'Public Safety',
  'Publishing',
  'Railroad Manufacture',
  'Ranching',
  'Real Estate',
  'Recreational Facilities & Services',
  'Religious Institutions',
  'Renewables & Environment',
  'Research',
  'Restaurants',
  'Retail',
  'Security & Investigations',
  'Semiconductors',
  'Shipbuilding',
  'Sporting Goods',
  'Sports',
  'Staffing & Recruiting',
  'Supermarkets',
  'Telecommunications',
  'Textiles',
  'Think Tanks',
  'Tobacco',
  'Translation & Localization',
  'Transportation/Trucking/Railroad',
  'Utilities',
  'Venture Capital & Private Equity',
  'Veterinary',
  'Warehousing',
  'Wholesale',
  'Wine & Spirits',
  'Wireless',
  'Writing & Editing'
];
const employType = [
  'Full-time',
  'Part-time',
  'Self-employed',
  'Freelance',
  'Contract',
  'Internship',
  'Apprenticeship',
  'Seasonal'
];
const AddExperienceModal = ({ open, handleClose }) => {
  const DetailsPanel = memo(({ title }) => {
    const [inputElCount, setInputElCount] = useState(1);

    const array = (n) => {
      if (n < 1) {
        return [];
      }
      const countArray = array(n - 1);
      countArray.push(n);
      return countArray;
    };

    return array(inputElCount).map((key) => (
      <Grid container spacing={3} sx={{ mb: 5 }} key={key}>
        <Grid item xs={12}>
          <Stack flexDirection="row" justifyContent="space-between">
            <Typography variant="h6">{`${title} ${key}`}</Typography>
            <IconButton onClick={() => setInputElCount((prev) => (prev += 1))}>
              <AddIcon />
            </IconButton>
          </Stack>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <AsyncAutocomplete list={Industries} placeholder="Select industry" />
        </Grid>
        <Grid item xs={12}>
          <AsyncAutocomplete
            list={employType}
            placeholder="Select employment type"
          />
        </Grid>
        <Grid item xs={12}>
          <AsyncAutocomplete list={employType} placeholder="Select company" />
        </Grid>
      </Grid>
    ));
  });
  return (
    <SenzaModal
      title="Add Experience"
      handleClose={handleClose}
      open={open === 'xp'}
    >
      {qualList.map((title) => (
        <DetailsPanel title={title} key={title} />
      ))}
    </SenzaModal>
  );
};

export default AddExperienceModal;
