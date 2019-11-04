// tslint:disable-next-line: eofline
import { prop, modelOptions } from '@typegoose/typegoose';
import { ApiModelProperty } from '@nestjs/swagger';
@modelOptions({
    // 创建数据就会添加一个创建的时间戳，如果修改数据也会添加一个修改数据的时间戳
    schemaOptions: {
        timestamps: true,
    },
})
export class User {
    @ApiModelProperty({ description: '用户名', example: 'user1' })
    @prop()
    username: string;
    @ApiModelProperty({ description: '密码', example: 'pass1' })
    @prop()
    password: string;

}
