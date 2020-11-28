import React from 'react';
import {Form, Input, Button, Checkbox, DatePicker, Radio, Upload, Select, InputNumber} from 'antd';
import {UploadOutlined} from '@ant-design/icons';
import {Client} from '../../interfaces/client';

const ClientForm = (client: Client | null) => {

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const formItemLayout = {
        labelCol: {span: 6},
        wrapperCol: {span: 14},
    };

    const { Option } = Select;

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const normFile = (e: { fileList: any; }) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    // @ts-ignore
    return (
        <div style={{clear: 'both'}}>
            <Form
                name="basic"
                {...formItemLayout}
                initialValues={{remember: true}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >

                <Form.Item
                    label="Имя"
                    name="name1"
                    rules={[{required: true, message: 'Введите имя'}]}
                >
                    <Input value={client?.ethnos}/>
                </Form.Item>
                <Form.Item
                    label="Фамилия"
                    name="name2"
                    rules={[{required: true, message: 'Введите фамилию'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Отчество"
                    name="name3"
                    rules={[{required: true, message: 'Введите отчество'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item label="Дата рождения">
                    <DatePicker/>
                </Form.Item>

                <Form.Item name="sex" label="Пол">
                    <Radio.Group>
                        <Radio value="male">Мужской</Radio>
                        <Radio value="female">Женский</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    name="settlement-type"
                    label="Тип населённого пункта"
                    hasFeedback
                    rules={[{ required: true, message: 'Выберите тип населённого пункта' }]}
                >
                    <Select placeholder="Выберите тип населённого пункта">
                        <Option value="1">Город</Option>
                        <Option value="2">Село</Option>
                    </Select>
                </Form.Item>

                <Form.Item label="Размер семьи">
                    <Form.Item name="family-size" noStyle>
                        <InputNumber min={1} max={100} />
                    </Form.Item>
                </Form.Item>

                <Form.Item
                    name="checkbox-group"
                    label="Дополнительные факторы:">
                    <Checkbox.Group>
                        <Checkbox value="smoke">Курение</Checkbox>
                        <Checkbox value="alcohol">Алкоголь</Checkbox>
                    </Checkbox.Group>
                </Form.Item>

                <Form.Item
                    name="upload"
                    label="Скан документа / справки"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                >
                    <Upload name="logo" listType="picture">
                        <Button icon={<UploadOutlined/>}>Загрузить</Button>
                    </Upload>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Сохранить
                    </Button>
                </Form.Item>
            </Form>
        </div>

    );
};

export default ClientForm;
