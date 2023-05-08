import React from 'react'
import { SmileOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, Radio, DatePicker, Upload, notification } from 'antd';


function AntForm() {
    const { Option } = Select;
    const [api, contextHolder] = notification.useNotification();


    // Form submite Strt
    const HandalForm = (Data) => {
        console.log(Data)

        // After Validation Scuu Notefecation
        api.open({
            message: 'Notification Title',
            description:
                'Crete Account Suuc',
            icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        });
    }

    // Phon Number Start
    const countrynumber = (
        <Form.Item name="countryCode"
            rules={[{ required: true }]}
            noStyle>
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
                <Option value="91">+91</Option>

            </Select>
        </Form.Item>
    );
    return (
        <div className="container py-2" style={{background:'#ECF9FF',marginTop:'200px'}} >
        
        <div>
        <h1  style={{display:'flex',justifyContent:'center'}} >Hello This is Ant design Form</h1>
        </div>
            <div className="card boder-0 shadow w-100 p-3 mx-auto" style={{ height: 'auto'}} >

                {/* Form Start*/}
                <Form
                    onFinish={HandalForm}>
                    {/*User Name Start */}
                    <Form.Item
                        label='UserName'
                        name='UserName'
                        rules={[{ required: true },
                        { min: 4 }
                        ]}>
                        <Input />
                    </Form.Item>


                    {/* Email Start*/}
                    <Form.Item

                        label="Email"
                        name="Email"
                        rules={[{ required: true },
                        { type: 'email' }
                        ]}>
                        <Input />
                    </Form.Item>


                    {/*Password Start*/}
                    <Form.Item
                        label="Password"
                        name="Password"
                        rules={[{ required: true },
                        { pattern: "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" }
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>


                    {/*Redio Btn Gender Start*/}
                    <Form.Item
                        label="Gender"
                        name="Gender"
                        rules={[{ required: true }]}
                    >
                        <Radio.Group>
                            <Radio value="Male">Male </Radio>
                            <Radio value="Female">Female</Radio>
                            <Radio value="Other">Other</Radio>
                        </Radio.Group>
                    </Form.Item>


                    {/*DropDown Star State */}
                    <Form.Item
                        label="State"
                        name="State"
                        rules={[{ required: true }]}>

                        <Select placeholder="Select Your State">
                            <Option value="Assam ">Assam </Option>
                            <Option value="Gujarat">Gujarat</Option>
                            <Option value="Bihar">Bihar </Option>
                            <Option value="Maharashtra">Maharashtra</Option>
                        </Select>
                    </Form.Item>

                    {/* Birth Date Start*/}
                    <Form.Item
                        label="BirthDate"
                        name="BirthDate"
                        rules={[{ required: true }]}
                    >
                        <DatePicker />
                    </Form.Item>


                    {/*Phone Number Start */}
                    <Form.Item
                        name="phone"
                        label="Phone Number"
                        rules={[{ required: true }]}>
                        <Input addonBefore={countrynumber} />
                    </Form.Item>


                    {/*Submit Btn*/}
                    <Form.Item >
                        {contextHolder}
                        <Button type="primary"
                            htmlType="submit"
                        >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default AntForm
