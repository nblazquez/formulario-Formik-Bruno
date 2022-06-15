import {Form, Field, Formik, useField} from 'formik';
import {Card, CardContent, TextField, MenuItem, Typography, FormControlLabel, Checkbox, CheckboxProps, FormGroup, Box} from '@mui/material';
import {InvestmentDetails} from './InvestmentDetails';

const initialValues: InvestmentDetails = {
  fullName: '',
  initialInvestment: undefined,
  investmentRisk: [],
  commentAboutInvestmentRisk: '',
  dependents: -1,
  acceptedTermsAndConditions: false
};

const FormDemo = () => {
    return (
        <Card>
            <CardContent>
                <Typography variant='h4'>New Account</Typography>
                <Formik
                  initialValues={initialValues}
                  onSubmit={() => {}}
                >
                  {({values}) => (
                    <Form>
                      <Box marginBottom={2}>
                        <FormGroup>
                          <Field name='fullName' as={TextField} label='Full Name' />
                        </FormGroup>
                      </Box>

                      <Box marginBottom={2}>
                        <FormGroup>
                          <Field name='initinalInvestment' type='number' as={TextField} label='Inicial Investment' />
                        </FormGroup>
                      </Box>

                      <Box marginBottom={2}>
                        <FormGroup>
                          <MyCheckBox name='investmentRisk' value='High' label='High - Super risky' />
                          <MyCheckBox name='investmentRisk' value='Medium' label='Medium - Risky' />
                          <MyCheckBox name='investmentRisk' value='Low' label='Low - Safe' />
                        </FormGroup>
                      </Box>

                      <Box marginBottom={2}>
                        <FormGroup>
                          <Field 
                            name='commentAboutInvestmentRisk' 
                            as={TextField} 
                            multiline 
                            rows={3} 
                            rowsMax={10} 
                            label='Comment' 
                          />
                        </FormGroup>
                      </Box>

                      <Box marginBottom={2}>
                        <FormGroup>
                          <Field name='dependents' as={TextField} select>
                            <MenuItem value={0}>0</MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                          </Field>
                        </FormGroup>
                      </Box>
                      
                      <MyCheckBox name='acceptedTermsAndConditions' label='Accept Terms and Conditions' />
                      <pre>{JSON.stringify(values, null, 4)}</pre>
                    </Form>
                  )}
                </Formik>
            </CardContent>
        </Card>
    )
}

export interface MyCheckBoxProps extends CheckboxProps {
  name: string,
  value?: string | number,
  label?: string
}

export function MyCheckBox(props : MyCheckBoxProps){
  const [field] = useField({
    name: props.name,
    type: 'checkbox',
    value: props.value
  })
  return <FormControlLabel control={<Checkbox {...props} {...field} />} label={props.label} />
}

export default FormDemo
